import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => {
  return (
    <section className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h2 className='gradient__text'>A lot is happening, <br />We are blogging about it.</h2>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article
            imgUrl={blog01}
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
            date='Sep 26, 2021'
          />
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article
            imgUrl={blog02}
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
            date='Sep 26, 2021'
          />
          <Article
            imgUrl={blog03}
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
            date='Sep 26, 2021'
          />
          <Article
            imgUrl={blog04}
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
            date='Sep 26, 2021'
          />
          <Article
            imgUrl={blog05}
            title='GPT-3 and Open AI is the future. Let us explore how it is?'
            date='Sep 26, 2021'
          />
        </div>
      </div>
    </section>
  )
}

export default Blog