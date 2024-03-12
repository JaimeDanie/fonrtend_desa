import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({objetivo, duracion, prefijo, sufijo}) => {
  const [contador, setContador] = useState(0);
  const paso = Math.ceil(objetivo / (duracion / 50)); // Incremento por cada actualización (aprox. cada 50 ms)

  const [ref, inView] = useInView({
    triggerOnce: true, // Para que el efecto se dispare solo una vez
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setContador((prevContador) => {
          const nuevoContador = prevContador + paso;
          return nuevoContador >= objetivo ? objetivo : nuevoContador;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, objetivo, duracion, paso]);

  return (
    <div ref={ref}>
      <h2 className='section-metric-number'>{prefijo}{contador}{sufijo}</h2>
    </div>
  );
};

export default Counter;