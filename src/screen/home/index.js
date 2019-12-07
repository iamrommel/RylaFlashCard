import React, { useState, useEffect } from 'react'
import { View, Text, List, ListItem, Content, Container } from 'native-base'
import { FlatList } from 'react-native'
import { ItemDisplay } from './ItemDisplay'

const data = [
  {
    id: '4f95c183-2a03-4589-bd35-37a9dcc05f23',
    title: 'Director of Sales',
  },
  {
    id: '98c700cd-1527-441b-9e71-95572105d36a',
    title: 'Chemical Engineer',
  },
  {
    id: 'f6cf5de2-ecbe-46ce-9cea-27bb468c70f7',
    title: 'Biostatistician III',
  },
  {
    id: 'af71dd03-9808-457a-a0f8-fa44ee1fd6bb',
    title: 'Assistant Media Planner',
  },
  {
    id: '9ff538f2-9f33-4d94-a3de-e6002cd94bdb',
    title: 'Chemical Engineer',
  },
  {
    id: '150464d5-76b1-4eda-af66-3af132c90db7',
    title: 'Account Representative III',
  },
  {
    id: 'ee8fb28a-f4e5-4326-aa91-27e510898231',
    title: 'Computer Systems Analyst II',
  },
  {
    id: '943ea76a-c4ae-4927-bc0c-a013851d93ac',
    title: 'Software Consultant',
  },
  {
    id: 'c94d4884-068e-496a-a3d7-ecdab2ef735f',
    title: 'Operator',
  },
  {
    id: '969d8f7d-e851-4609-8e39-25104ade7d80',
    title: 'Cost Accountant',
  },
  {
    id: '3e1a9ff1-f535-4642-95fb-30dd4f21321c',
    title: 'Associate Professor',
  },
  {
    id: '92233d87-416d-4307-88d6-bb153f266e84',
    title: 'Director of Sales',
  },
  {
    id: '3e88376a-e62d-4c17-b4bf-66f89891925e',
    title: 'Operator',
  },
  {
    id: '39c10030-e61b-47c6-8103-4aa18375c251',
    title: 'Help Desk Operator',
  },
  {
    id: '32747cd0-8b3b-4afb-97b8-d34a84a687c1',
    title: 'Web Designer I',
  },
  {
    id: '5a883be1-d145-4a5d-b964-ecacdb3f1cab',
    title: 'Biostatistician I',
  },
  {
    id: '3e010818-5911-467a-ae72-be8ae3e92e45',
    title: 'Product Engineer',
  },
  {
    id: '91da2ba9-77c7-4054-8090-1c76de8a5a18',
    title: 'Project Manager',
  },
  {
    id: '135e141f-b34c-4bae-95f5-b7764dced14c',
    title: 'Associate Professor',
  },
  {
    id: 'ea027e07-a35f-4433-8adf-d504e9ba9ca7',
    title: 'Media Manager II',
  },
]

export default () => {
  return <ItemDisplay />
}
