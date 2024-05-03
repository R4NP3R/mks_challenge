import * as S from "./styles";

export const LoadingSkeleton = () => {
  return (
  <S.LoadingSection data-testid='loading'>
    {Array.from({length: 8}).map((_, i) => (
      <S.LoadingContainer key={i}
      animate={{backgroundImage: 'linear-gradient(#f1f1f1,#b1b1b1)'}}
      transition={{duration: 2, repeat: Infinity, ease:'linear'}}
      />
  ))}
</S.LoadingSection>
    )
}