import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Q.1: How will you improve the performance of a React Application?</h1>
            <p>Keeping component state local where necessary
                Memoizing React components to prevent unnecessary re-renders
                Code-splitting in React using dynamic import()
                Windowing or list virtualization in React
                Lazy loading images in React</p>
            <h1 className='text-2xl font-bold'>Q.2: What are the different ways to manage a state in a React application?</h1>
            <p></p>
            <h1 className='text-2xl font-bold'>Q.3 How does prototypical inheritance work?</h1>
            <p></p>
            <h1 className='text-2xl font-bold'>Q.4 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
            <p></p>
            <h1 className='text-2xl font-bold'>Q.5 What is a unit test? Why should write unit tests?</h1>
            <p></p>
        </div>
    );
};

export default Blog;