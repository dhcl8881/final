import React from 'react'
import styled from 'styled-components'
import cardInfo from './../Constants/cardInfo'

export default function SearchResult({  data , keyword}) {

    const Wrapper = styled.div`
      margin-top: 20px;
    `

    const Table = styled.table`
      width: 100%;
      border-spacing: 1px;
      width: 100%;
      border: 0px;
      background-color: #c0c0c0;

      th{
        background: #efefef;
        padding: 3px 5px;
        text-align: left;
      }
    `


    return (
      <Wrapper>
        <h4>搜尋:{keyword}</h4>
        <h4>查詢結果:</h4>

        {data.length > 0 ? (
          <Table>
            <thead>
              <tr>
                {cardInfo.map((info) => (
                  <th>{info}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((Case) => (
                <tr key={Case.studentID}>
                  <td>{Case.caseID}</td>
                  <td>{Case.date}</td>
                  <td>{Case.studentID}</td>
                  <td>{Case.name}</td>
                  <td>{Case.college}</td>
                  <td>{Case.department}</td>
                  <td>{Case.pickupLocation}</td>
                  <td>{Case.saveLocation}</td>
                  <td>{Case.pickupContact}</td>
                  <td>{"No"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) 
        : <p>找不到資料</p>
        }
      </Wrapper>
    );
}
  