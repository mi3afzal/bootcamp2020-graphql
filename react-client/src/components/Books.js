import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
    query GetBooks {
        books {
            title
            author
        }
    }
`;

function Books() {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.books.map(({ title, author }) => (
        <div key={title}>
            <p>
                Book: {title}
                <br />
                Author: {author}
            </p>
        </div>
    ));
}

export default Books;