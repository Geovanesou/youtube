import { Container, ChannelImage, ImageBanner, TextContainer, TitleContainer, Title, TextCard } from './styles';

function VideoComponent() {
  return (
    <Container>
      <ImageBanner src="https://i.ytimg.com/vi/07XXVj08BYA/hqdefault.jpg" />
      <TitleContainer>
        <ChannelImage>
          GIS
        </ChannelImage>
        <TextContainer>
          <Title>INXS - DO ANONIMATO AO ESTRELATO</Title>
          <TextCard>INXS</TextCard>
          <TextCard>5,2 mi de visualizações • há 2 anos</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoComponent;