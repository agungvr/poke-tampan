import React, { useState, useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GetPokemon } from '@tampan/graph-query/pokemon.gql';
import Modal from '@tampan/components/modal';
import Spinner from '@tampan/components/spinner';
import {
  Container,
  Content,
  Image,
  Title,
  SubTitle,
  LabelContainer,
  Label,
  ImageContainer,
  ContentContainer,
  Text,
  Box,
} from './style';

const style = {
  modal: {
    maxWidth: '100%',
    overflow: 'scroll',
    backgroundImage:
      'linear-gradient( to right, rgba(177, 212, 255) 1%, rgba(229,245,255,0.9) 98% )',
  },
};

const withPokemonDetails = (Component) => (props) => {
  const [getPokemon, { loading, data: details }] = useLazyQuery(
    GetPokemon
  );
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const _openModal = useCallback(
    (params) => () => {
      setData(params);
      setIsOpen(true);
    },
    []
  );

  const _closeModal = useCallback(async () => {
    setData(null);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (data) {
      getPokemon({ variables: { name: data.name } });
    }
  }, [data, getPokemon]);

  return (
    <>
      <Component
        {...props}
        openDetailsModal={_openModal}
        closeDetailsModal={_closeModal}
      />
      <Modal
        onClose={_closeModal}
        isOpen={isOpen}
        maxHeight="70vh"
        easyClose
        contentStyle={style.modal}
      >
        <Container>
          {data && (
            <Content>
              <Title>{data.name}</Title>
              <Image
                src={data.image}
                alt="poke-tampan"
                margin="24px"
              />
              <LabelContainer>
                {data.types.map((item) => (
                  <Label key={item}>{item}</Label>
                ))}
              </LabelContainer>
            </Content>
          )}
          {loading && (
            <Content>
              <Spinner />
            </Content>
          )}
          {details && (
            <Content>
              {details.pokemon.evolutions && (
                <>
                  <SubTitle>Evolutions</SubTitle>
                  <LabelContainer>
                    {details.pokemon.evolutions.map((pokemon) => (
                      <ImageContainer key={pokemon.id}>
                        <Image
                          width="70px"
                          height="70px"
                          src={pokemon.image}
                          alt="poke-tampan"
                        />
                        <Text>{pokemon.name}</Text>
                      </ImageContainer>
                    ))}
                  </LabelContainer>
                </>
              )}
              <ContentContainer>
                <SubTitle>Special Attack</SubTitle>
                <ImageContainer>
                  {details.pokemon.attacks.special.map((item) => (
                    <Box key={item.name}>
                      <Text>{item.name}</Text>
                      <Text margin="0px 24px">{item.damage}</Text>
                      <Label>{item.type}</Label>
                    </Box>
                  ))}
                </ImageContainer>
              </ContentContainer>
            </Content>
          )}
        </Container>
      </Modal>
    </>
  );
};

export default withPokemonDetails;
