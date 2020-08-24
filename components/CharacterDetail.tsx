import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Character from '../types/Character';

interface CharacterDetailProps {
  character: Character;
}

type Props = CharacterDetailProps;

const CharacterDetail = ({ character }: Props) => {
  return (
    <View style={styles.card}>
      <View>
        <Image source={{ uri: character.image }} style={styles.image} />
        <View style={styles.cardInfo}>
          <Text style={styles.title}>{character.name}</Text>
          {character.gender ? (
            <Text style={styles.text}>Gender: {character.gender}</Text>
          ) : null}
          {character.species ? (
            <Text style={styles.text}>Specie: {character.species}</Text>
          ) : null}
          {character.type ? (
            <Text style={styles.text}>Type: {character.type}</Text>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    maxWidth: 450,
    width: '93%',
    backgroundColor: '#4a5568',
    marginVertical: 20,
    borderRadius: 20,
  },
  cardInfo: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    color: 'white',
    fontWeight: '700',
    letterSpacing: 2,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 15,
  },
});

export default CharacterDetail;