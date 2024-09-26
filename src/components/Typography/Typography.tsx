import styled from "styled-components";

export interface HeadingBaseProps {
  fontSize?: number;
  fontWeight?: number;
  $lineHeight?: number;
  color?: string;
}

const HeadingBase = styled.h1<HeadingBaseProps>`
  font-family: "Raleway", sans-serif;
  font-size: ${({ fontSize = 14 }) => fontSize}px;
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  line-height: ${({ $lineHeight = 16.44 }) => $lineHeight}px;
  text-align: left;
  color: ${({ color = "#000000" }) => color};
  margin: 0;
`;

export const H1 = styled(HeadingBase).attrs<HeadingBaseProps>((props) => ({
  as: "h1",
  fontSize: props.fontSize || 28,
  fontWeight: props.fontWeight || 600,
  lineHeight: props.$lineHeight || 32.87,
}))<HeadingBaseProps>``;

export const H2 = styled(HeadingBase).attrs<HeadingBaseProps>((props) => ({
  as: "h2",
  fontSize: props.fontSize || 24,
  fontWeight: props.fontWeight || 600,
  lineHeight: props.$lineHeight || 28.18,
}))<HeadingBaseProps>``;

export const H3 = styled(HeadingBase).attrs<HeadingBaseProps>((props) => ({
  as: "h3",
  fontSize: props.fontSize || 20,
  fontWeight: props.fontWeight || 600,
  lineHeight: props.$lineHeight || 23.48,
}))<HeadingBaseProps>``;

export const H4 = styled(HeadingBase).attrs<HeadingBaseProps>((props) => ({
  as: "h4",
  fontSize: props.fontSize || 18,
  fontWeight: props.fontWeight || 600,
  lineHeight: props.$lineHeight || 21.13,
}))<HeadingBaseProps>``;

export const H5 = styled(HeadingBase).attrs<HeadingBaseProps>((props) => ({
  as: "h5",
  fontSize: props.fontSize || 16,
  fontWeight: props.fontWeight || 600,
  lineHeight: props.$lineHeight || 18.78,
}))<HeadingBaseProps>``;

export const Body = styled.span<HeadingBaseProps>`
  font-family: "Raleway", sans-serif;
  font-size: ${({ fontSize = 14 }) => fontSize}px;
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  line-height: ${({ $lineHeight = 16.44 }) => $lineHeight}px;
  text-align: left;
  color: ${({ color = "#000000" }) => color};
  margin: 0;
`;

export const SmTextLink = styled.span<HeadingBaseProps>`
  font-family: "Raleway", sans-serif;
  font-size: ${({ fontSize = 12 }) => fontSize}px;
  font-weight: ${({ fontWeight = 600 }) => fontWeight};
  line-height: ${({ $lineHeight = 14.09 }) => $lineHeight}px;
  color: #1c7384;
  margin: 0;
`;

export const SmText = styled.span<HeadingBaseProps>`
  font-family: "Raleway", sans-serif;
  font-size: ${({ fontSize = 12 }) => fontSize}px;
  font-weight: ${({ fontWeight = 400 }) => fontWeight};
  line-height: ${({ $lineHeight = 14.09 }) => $lineHeight}px;
  margin: 0;
`;
