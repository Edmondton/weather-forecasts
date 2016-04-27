import React, {Component, PropTypes} from 'react'

export default function Issues ({ issues }) {
    return (
        <table>
            <thead>
            <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Report Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>
            {issues.map((issue, i) =>
                <tr key={i}>
                    <td>{ issue.get('number') }</td>
                    <td>{ issue.get('title') }</td>
                    <td>{ issue.getIn(['user', 'login']) }</td>
                    <td>{ issue.get('body').slice(0, 140) }</td>
                </tr>
            )}
            </tbody>
        </table>
    )
}