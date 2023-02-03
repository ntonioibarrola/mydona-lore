import { type FC, type DetailedHTMLProps, type HTMLAttributes } from 'react';

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  breaks?: boolean;
};

export const Paragraph: FC<ParagraphProps> = ({ children, breaks }) => {
  return (
    <p className='whitespace-pre-line px-10 text-justify text-base tracking-wide'>
      {breaks && <br />}
      {children}
      {breaks && <br />}
    </p>
  );
};
