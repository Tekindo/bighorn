import React from 'react';
import Node from './node-view';

const Activity = ({activity}) => (
    <ol>
        {activity.nodes.map(node => <Node key={node.id} node={node} />)}
    </ol>)

export default Activity;
