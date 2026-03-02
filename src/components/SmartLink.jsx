import { Link } from "react-router-dom";

export default function SmartLink({ href, children, forceExternal, ...props }) {
  // 1. Verifica se é um link externo (ou se a propriedade forceExternal foi ativada)
  const isExternal = forceExternal || href.startsWith("http");

  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...props}
      >
        {children}
      </a>
    );
  }

  // 2. Verifica se é um link âncora para a mesma página
  if (href.startsWith("#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  // 3. Se não for externo nem âncora, assume que é uma rota interna e usa o React Router
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
}