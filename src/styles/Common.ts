import styled from './';
import { Color } from './Theme';

interface SpanProps {
  color?: Color;
}

export const Span = styled('span')<SpanProps>`
  color: ${({ theme, color }) => (color ? theme.color[color] : theme.color.main)};
`;
