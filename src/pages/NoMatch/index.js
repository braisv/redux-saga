import React from "react";
import styled from "styled-components";
import { PageContent, Row } from "../../components/containers/content";
import { BigTitle } from "../../components/Text";

const NoMatch = () => {
  return (
    <PageContent>
      <Box>
        <BigTitle>404</BigTitle>
      </Box>
      <Box>There is no page with such a pathname...</Box>
    </PageContent>
  );
};

export default NoMatch;

const Box = styled(Row)`
  height: 100%;
`;
