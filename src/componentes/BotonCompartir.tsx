"use client"

import { useState, useRef, useEffect } from 'react';
import {
  Share2,
  Facebook,
  Twitter,
  Mail,
  Copy
} from 'lucide-react';
import WhatsAppIcon from '@/iconos/Whatsappicon.svg';

const Iconos: any = {
  facebook: Facebook,
  twitter: Twitter,
  mail: Mail,
  whatsapp: ({ className }: { className: string }) => {
    return <img src={WhatsAppIcon.src} className={className} alt="WhatsApp" />
  },
  copy: Copy
};

interface PropsBotonCompartir {
  shareUrl: string;
  hacerRelative: boolean;
  className?: string;
}

function BotonCompartir({ shareUrl, hacerRelative, className }: PropsBotonCompartir) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const redesSociales = [
    {
      nombre: "Twitter",
      icono: "twitter",
      url: "https://twitter.com/intent/tweet?url="
    },
    {
      nombre: "WhatsApp",
      icono: "whatsapp",
      url: "https://api.whatsapp.com/send?text="
    },
    {
      nombre: "Correo electrónico",
      icono: "mail",
      url: "mailto:?body="
    },
    {
      nombre: "Copiar enlace",
      icono: "copy",
      action: "copy"
    }
  ];

  const handleShareClick = () => {
    setShowDropdown(!showDropdown);
  };

  // Cerrar el dropdown al hacer clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className={`relative mb-0 mr-2`}>
      <div
        className={`${hacerRelative ? "relative" : "absolute"} -bottom-2 mb-6 right-0 mr-2 text-white hover:cursor-pointer hover:text-blue-400`}
        onClick={handleShareClick}
      >
        <Share2 className="w-6 h-6" />
      </div>

      {showDropdown && (
        <div
          ref={dropdownRef}
          className="absolute bottom-8 right-0 mr-3 mb-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1">
            {redesSociales.map((red) => {
              const IconComponent = Iconos[red.icono];
              if (red.url) {
                return (
                  <a
                    key={red.nombre}
                    href={`${red.url}${encodeURIComponent(window.location.href + shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => {
                      setShowDropdown(false);
                    }}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {red.nombre}
                  </a>
                );
              } else if (red.action === 'copy') {
                return (
                  <button
                    key={red.nombre}
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href + shareUrl)
                        .then(() => {
                          alert('Enlace copiado al portapapeles');
                          setShowDropdown(false);
                        })
                        .catch((err) => {
                          console.error('Error al copiar el enlace', err);
                        });
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    {red.nombre}
                  </button>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export { BotonCompartir };
