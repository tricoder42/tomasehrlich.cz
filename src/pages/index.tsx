import * as React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

const FullPage = styled.div`
  display: flex;
  justify-content: center;
`

const Title = styled.h1`
  display: inline-block;
  margin-top: 3.1415926535em;
  font-size: 420%;
  font-weight: lighter;
`

const SubTitle = styled.small`
  display: block;
  margin-top: 2%;
  padding-top: 1%;

  font-size: 42%;
  font-weight: bold;
  text-align: center;

  border-top: 1px solid black;
`

export default () => (
  <Layout>
    <FullPage>
      <Title>
        Tomáš Ehrlich <SubTitle>full-stack developer</SubTitle>
      </Title>
    </FullPage>
  </Layout>
)
