import React from 'react';

const LENGTH = 140;

function getBody(text) {
    let result = text;
    let textLength = text.length;
    if (textLength > LENGTH) {
        let flag = false;
        let counter = 1;

        while(!flag) {
            if (text[LENGTH - counter] == ' ') {
                return text.substr(0, [LENGTH - counter]) + '...';
            } else if (text[LENGTH + counter] == ' ') {
                return text.substr(0, [LENGTH - counter]) + '...';
            }
            counter++;
        }

        return text.substring(0, LENGTH);
    }

    return result;
}

export default function ShortenBody ({ text = '' }) {
    return (
        <span>
            {getBody(text)}
        </span>
    );
}