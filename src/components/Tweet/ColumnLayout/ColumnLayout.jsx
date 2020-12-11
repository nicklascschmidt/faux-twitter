import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;

  & > div:first-child {
    display: flex;
    justify-content: flex-end;
    flex-basis: 50px;
    flex-grow: 0;
    margin-right: 10px;
  }
  & > div:last-child {
    flex-grow: 1;
  }
`;
