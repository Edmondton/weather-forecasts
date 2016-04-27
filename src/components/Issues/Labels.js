import React from 'react';
import Immutable from 'immutable';

export default function Labels ({ labels = Immutable.List() }) {
    if (labels.size == 0) {
        return null;
    }

    var items = labels.map((item, index) => {
        return (
                <p key={index}>
                  {item.get('name')}
                </p>
        );
    });

    return (
        <div>
          {items}
        </div>
    )
}
