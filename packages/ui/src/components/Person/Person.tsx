import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, TypographyProps } from '@mui/material';

import ContentModule from '../ContentModule';
import { PersonProps } from './Person.types';
import sidekick from '@last-rev/contentful-sidekick-util';

const Person = ({ header, footer, name, jobTitle, email, body, sidekickLookup }: PersonProps) => {
  return (
    <>
      {header ? <ContentModule {...(header as any)} /> : null}

      <Root component="main" {...sidekick(sidekickLookup)}>
        {!!name && <Name {...sidekick(sidekickLookup, 'name')}>{name}</Name>}

        {!!jobTitle && <JobTitle {...sidekick(sidekickLookup, 'jobTitle')}>{jobTitle}</JobTitle>}

        {!!email && <Email {...sidekick(sidekickLookup, 'email')}>{email}</Email>}

        {!!body && (
          <BodyWrap>
            <Body {...sidekick(sidekickLookup, 'body')} __typename="Text" body={body} variant="detailPageBody" />
          </BodyWrap>
        )}
      </Root>

      {footer ? <ContentModule {...(footer as any)} /> : null}
    </>
  );
};

const Root = styled(Box, {
  name: 'Person',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})(() => ({}));

const Name = styled(Typography, {
  name: 'Person',
  slot: 'Name',
  overridesResolver: (_, styles) => [styles.name]
})<TypographyProps<React.ElementType>>(() => ({}));

const JobTitle = styled(Typography, {
  name: 'Person',
  slot: 'JobTitle',
  overridesResolver: (_, styles) => [styles.jobTitle]
})<TypographyProps<React.ElementType>>(() => ({}));

const Email = styled(Typography, {
  name: 'Person',
  slot: 'Email',
  overridesResolver: (_, styles) => [styles.email]
})<TypographyProps<React.ElementType>>(() => ({}));

const BodyWrap = styled(Box, {
  name: 'Blog',
  slot: 'BodyWrap',
  overridesResolver: (_, styles) => [styles.bodyWrap]
})(() => ({}));

const Body = styled(ContentModule, {
  name: 'Blog',
  slot: 'Body',
  overridesResolver: (_, styles) => [styles.body]
})(() => ({}));

export default Person;
