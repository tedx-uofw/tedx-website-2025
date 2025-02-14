import { Image as UnpicImage } from '@unpic/react';

const Image = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  layout = 'constrained',
  ...props 
}) => {
  return (
    <div 
      className="relative"
      style={{ 
        width: width || 'auto',
        height: height || 'auto',
      }}
    >
      <UnpicImage
        src={src}
        alt={alt}
        className={`
          transition-opacity duration-500 ease-in-out
          ${className}
        `}
        layout={layout}
        width={width}
        height={height}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default Image; 