
import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
    return (
        <>
            {question.map((q) => {
                const { id, title, info } = q;
                return (
                    <article key={id}>
                        <h4>{title}</h4>
                        <p>{info}</p>
                    </article>

                )
            })}
        </>
    )
};

export default Question;