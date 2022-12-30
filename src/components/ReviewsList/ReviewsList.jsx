import { List, Title } from "./ReviewsList.styled";

export const ReviewsList = ({ reviews }) => {

  return (
    <List>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <Title>Author: {author}</Title>
            <p>{content}</p>
          </li>
        );
      })}
    </List>
  );
};
