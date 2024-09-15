/* @jsxRuntime automatic */

type PropsType = {
  code: string;
}

export default function HeatMap(props: PropsType) {
  const { code } = props;

  return (
    <svg width={200} height={100} xmlns="http://www.w3.org/2000/svg">
      <text x="50%" y="50%" fontSize="20">Code: {code}</text>
    </svg>
  )
}
