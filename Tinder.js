'use strict';
 
import React, {Component} from "react";
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import SwipeCards from "react-native-swipe-cards";
 
let Card = React.createClass({
  handlePress() {
  console.log('I clicked this card'); 
  },
  render() {
    return (
      <View style={styles.card}>
       <TouchableHighlight onPress={this.handlePress}>
        <Image style={styles.thumbnail} source={{uri: this.props.image}} />
        </TouchableHighlight>
        <Text style={styles.text}>{this.props.name}, {this.props.age}</Text>
      </View>
    )
  }
})
 
let NoMoreCards = React.createClass({
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
})
 
const Cards = [
  {name: 'Jessica Lester', image: 'https://media.giphy.com/media/QutvHAwzfzRzW/giphy.gif', age: '22'},
  {name: 'Tara Lee', image: 'https://media.giphy.com/media/Epl4e2uhplOJa/giphy.gif', age: '25'},
  {name: 'Reily Reid', image: 'https://media.giphy.com/media/vjydjZM03Yi3K/giphy.gif', age: '19'},
  {name: 'Lisa Ann', image: 'https://media.giphy.com/media/tW9A4PSlLoPHW/giphy.gif', age: '18'},
  {name: 'Rachel Starr', image: 'https://media.giphy.com/media/lcnJAhem9V9QY/giphy.gif', age: '23'},
  {name: 'Jessica Gotti', image: 'https://media.giphy.com/media/2f7RQiiWMJc40/giphy.gif', age: '20'},
  {name: 'Sarah Rose', image: 'https://media.giphy.com/media/veAy5UOhBdS3C/giphy.gif', age: '21'},
  {name: 'Tiana Green', image: 'https://media.giphy.com/media/veAy5UOhBdS3C/giphy.gif', age: '21'},
  {name: 'Janell Brooks', image: 'https://media.giphy.com/media/S8rLi0YlYYURa/giphy.gif', age: '23'},
]
 
const Cards2 = [
  {name: 'Tina Gotti', image: 'https://media.giphy.com/media/3o85xr25CL9fvxgDXG/giphy.gif', age: '20'},
  {name: 'Kim Kardashian', image: 'https://media.giphy.com/media/Rpj4DDrCTXmmY/giphy.gif', age: '21'},
  {name: 'Kendall Clareese', image: 'https://media.giphy.com/media/12G9KNNh9OmByw/giphy.gif', age: '21'},
  {name: 'Kara Marie', image: 'https://media.giphy.com/media/Y2CNP5EyQwBos/giphy.gif', age: '23'},
]
 
export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);
 
    let CARD_REFRESH_LIMIT = 3
 
    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
 
      if (!this.state.outOfCards) {
        console.log(`Adding ${Cards2.length} more cards`)
 
        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }
 
    }
 
  },
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        loop={false}
 
        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        showYup={true}
        showNope={true}
 
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        cardRemoved={this.cardRemoved}
      />
    )
  }
})
 
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
