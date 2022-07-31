import React from 'react'
import { getTheme } from 'theme'
import * as S from './DesignSystem.styles'

const theme = getTheme()

function DesignSystem() {
  return (
    <div>
      <h1>Typography</h1>
      <S.H1>Typography (H1)</S.H1>
      <S.H2>Typography (H2)</S.H2>
      <S.H3>Typography (H3)</S.H3>
      <S.H4>Typography (H4)</S.H4>
      <S.H5>Typography (H5)</S.H5>
      <S.H6>Typography (H6)</S.H6>
      <S.H7>Typography (H7)</S.H7>
      <S.Lg>Typography (lg)</S.Lg>
      <S.Base>Typography (bs)</S.Base>
      <S.Md>Typography (md)</S.Md>
      <S.Sm>Typography (sm)</S.Sm>
      <S.Xs>Typography (xs)</S.Xs>
      <S.Xxs>Typography (xxs)</S.Xxs>

      <h1>Colors</h1>
      <div style={{ backgroundColor: theme.palette.grey[15] }}>grey15</div>
      <div style={{ backgroundColor: theme.palette.grey[20] }}>grey20</div>
      <div style={{ backgroundColor: theme.palette.grey[25] }}>grey25</div>
      <div style={{ backgroundColor: theme.palette.grey[30] }}>grey30</div>
      <div style={{ backgroundColor: theme.palette.grey[35] }}>grey35</div>
      <div style={{ backgroundColor: theme.palette.grey[40] }}>grey40</div>
      <div style={{ backgroundColor: theme.palette.grey[45] }}>grey45</div>
      <div style={{ backgroundColor: theme.palette.grey[50] }}>grey50</div>
      <div style={{ backgroundColor: theme.palette.grey[55] }}>grey55</div>
      <div style={{ backgroundColor: theme.palette.grey[60] }}>grey60</div>
      <div style={{ backgroundColor: theme.palette.grey[65] }}>grey65</div>
      <div style={{ backgroundColor: theme.palette.grey[70] }}>grey70</div>
      <div style={{ backgroundColor: theme.palette.grey[75] }}>grey75</div>
      <div style={{ backgroundColor: theme.palette.grey[80] }}>grey80</div>
      <div style={{ backgroundColor: theme.palette.grey[85] }}>grey85</div>
      <div style={{ backgroundColor: theme.palette.yellow[15] }}>yellow15</div>
      <div style={{ backgroundColor: theme.palette.yellow[20] }}>yellow20</div>
      <div style={{ backgroundColor: theme.palette.yellow[25] }}>yellow25</div>
      <div style={{ backgroundColor: theme.palette.yellow[30] }}>yellow30</div>
      <div style={{ backgroundColor: theme.palette.yellow[35] }}>yellow35</div>
      <div style={{ backgroundColor: theme.palette.yellow[40] }}>yellow40</div>
      <div style={{ backgroundColor: theme.palette.yellow[45] }}>yellow45</div>
      <div style={{ backgroundColor: theme.palette.yellow[50] }}>yellow50</div>
      <div style={{ backgroundColor: theme.palette.yellow[55] }}>yellow55</div>
      <div style={{ backgroundColor: theme.palette.yellow[60] }}>yellow60</div>
      <div style={{ backgroundColor: theme.palette.yellow[65] }}>yellow65</div>
      <div style={{ backgroundColor: theme.palette.yellow[70] }}>yellow70</div>
      <div style={{ backgroundColor: theme.palette.yellow[75] }}>yellow75</div>
      <div style={{ backgroundColor: theme.palette.yellow[80] }}>yellow80</div>
      <div style={{ backgroundColor: theme.palette.yellow[85] }}>yellow85</div>
      <div style={{ backgroundColor: theme.palette.green[15] }}>green15</div>
      <div style={{ backgroundColor: theme.palette.green[20] }}>green20</div>
      <div style={{ backgroundColor: theme.palette.green[25] }}>green25</div>
      <div style={{ backgroundColor: theme.palette.green[30] }}>green30</div>
      <div style={{ backgroundColor: theme.palette.green[35] }}>green35</div>
      <div style={{ backgroundColor: theme.palette.green[40] }}>green40</div>
      <div style={{ backgroundColor: theme.palette.green[45] }}>green45</div>
      <div style={{ backgroundColor: theme.palette.green[50] }}>green50</div>
      <div style={{ backgroundColor: theme.palette.green[55] }}>green55</div>
      <div style={{ backgroundColor: theme.palette.green[60] }}>green60</div>
      <div style={{ backgroundColor: theme.palette.green[65] }}>green65</div>
      <div style={{ backgroundColor: theme.palette.green[70] }}>green70</div>
      <div style={{ backgroundColor: theme.palette.green[75] }}>green75</div>
      <div style={{ backgroundColor: theme.palette.green[80] }}>green80</div>
      <div style={{ backgroundColor: theme.palette.green[85] }}>green85</div>
      <div style={{ backgroundColor: theme.palette.red[15] }}>red15</div>
      <div style={{ backgroundColor: theme.palette.red[20] }}>red20</div>
      <div style={{ backgroundColor: theme.palette.red[25] }}>red25</div>
      <div style={{ backgroundColor: theme.palette.red[30] }}>red30</div>
      <div style={{ backgroundColor: theme.palette.red[35] }}>red35</div>
      <div style={{ backgroundColor: theme.palette.red[40] }}>red40</div>
      <div style={{ backgroundColor: theme.palette.red[45] }}>red45</div>
      <div style={{ backgroundColor: theme.palette.red[50] }}>red50</div>
      <div style={{ backgroundColor: theme.palette.red[55] }}>red55</div>
      <div style={{ backgroundColor: theme.palette.red[60] }}>red60</div>
      <div style={{ backgroundColor: theme.palette.red[65] }}>red65</div>
      <div style={{ backgroundColor: theme.palette.red[70] }}>red70</div>
      <div style={{ backgroundColor: theme.palette.red[75] }}>red75</div>
      <div style={{ backgroundColor: theme.palette.red[80] }}>red80</div>
      <div style={{ backgroundColor: theme.palette.red[85] }}>red85</div>
      <div style={{ backgroundColor: theme.palette.blue[15] }}>blue15</div>
      <div style={{ backgroundColor: theme.palette.blue[20] }}>blue20</div>
      <div style={{ backgroundColor: theme.palette.blue[25] }}>blue25</div>
      <div style={{ backgroundColor: theme.palette.blue[30] }}>blue30</div>
      <div style={{ backgroundColor: theme.palette.blue[35] }}>blue35</div>
      <div style={{ backgroundColor: theme.palette.blue[40] }}>blue40</div>
      <div style={{ backgroundColor: theme.palette.blue[45] }}>blue45</div>
      <div style={{ backgroundColor: theme.palette.blue[50] }}>blue50</div>
      <div style={{ backgroundColor: theme.palette.blue[55] }}>blue55</div>
      <div style={{ backgroundColor: theme.palette.blue[60] }}>blue60</div>
      <div style={{ backgroundColor: theme.palette.blue[65] }}>blue65</div>
      <div style={{ backgroundColor: theme.palette.blue[70] }}>blue70</div>
      <div style={{ backgroundColor: theme.palette.blue[75] }}>blue75</div>
      <div style={{ backgroundColor: theme.palette.blue[80] }}>blue80</div>
      <div style={{ backgroundColor: theme.palette.blue[85] }}>blue85</div>
    </div>
  )
}

export { DesignSystem }
