import React from 'react';
import s from './News.module.css';

function News() {
  return (
      <div className={s.newsWrapper}>
        <h1>News!</h1>
        <h3>
          <strong>The ways Joe Biden or Donald Trump would get 270 electoral votes and the White House</strong>
        </h3>
        <div className={s.newsText}>
          It could still take days to know whether President Donald Trump or Democratic nominee Joe Biden will hold the
          White House for the next four years.
          Tallies in undecided states so far show the paths both hopefuls have to racking up the 270 electoral votes
          needed to win.
          As of Wednesday, Biden had won 227 electoral votes, according to NBC News projections. Trump trailed with 213.
          The race appeared it would come down to a handful of states NBC classified as either too close or too early to
          call: Pennsylvania, Michigan, Georgia, Arizona, North Carolina, Wisconsin, Nevada and Alaska.
        </div>
        <img src={'https://images.theabcdn.com/i/4690368/1500x375/c'} alt={'new'} />
      </div>
  )
}
export default News;