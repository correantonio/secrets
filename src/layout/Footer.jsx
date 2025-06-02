import React from 'react';
import Text from '../components/Fonts/Text';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darkus-20">
      <div className="container mx-auto pt-20 pb-4 px-6 flex justify-center flex-col gap-8 items-center text-center">
        <div className="flex gap-2 flex-col md:flex-row md:gap-4 items-center">
          <a
            href=""
            className="font-display md:text-[1.125rem]/6 text-grayish-20 underline decoration-solid decoration-grayish-10"
          >
            Termos de uso
          </a>
          <a
            href=""
            className="font-display md:text-[1.125rem]/6 text-grayish-20 underline decoration-solid decoration-grayish-10"
          >
            Política de Privacidade
          </a>
        </div>
        <Text>
          Copyright © 2023 – Não existe feminista Cristã. CNPJ
          45.798.486/0001-93
        </Text>
        <span className="text-sm font-display text-neutral-500 flex gap-1 items-center group">
          Design e Desenvolvimento por
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/__antoniocorrea/"
            className="underline underline-offset-4 decoration-blue-400 text-grayish-10 font-semibold hover:decoration-blue-600"
          >
            Antônio Corrêa
          </a>{' '}
          <ArrowUpRight
            size={14}
            color="white"
            className="-translate-x-[20px] opacity-0 group-hover:-translate-x-0 group-hover:opacity-100 transition-all ease-in-out"
          />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
