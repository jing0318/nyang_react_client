import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../Common/Header';
import nyangImg from '../../images/nyangImg.png';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '50ch',
    },
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  table: {
    width: '50%',
    margin: '0 auto',
    borderBottom: 'none',
    padding: '30px 0px 0px 0px',
  },
  title: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    marginBottom: '3%',
  },
  item: {
    width: '80%',
    margin: '0 auto',
    borderBottom: 'none',
    textAlign: 'center',
  },
  btn: {
    margin: theme.spacing(2.5),
    width: '12ch',
  },
  okbtn: {
    width: '85%',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
}));

function EnrollMember(props) {
  const classes = useStyles();
  // EnrollMember 관련 변수
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [certNumber, setCertNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [birth, setBirth] = useState('');
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeCertNumber = (e) => {
    setCertNumber(e.target.value);
  };
  const onChangePhoneNumber = (e) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onCheckId = () => {
    // id 중복 확인
    alert('사용가능');
  };
  const onCheckEmail = () => {
    // emial 인증 요청
  };
  const onCheckEmailCertNumber = () => {
    // email 인증 번호 일치 확인
  };
  const EnrollMemberInfo = () => {
    if (
      id == '' ||
      password == '' ||
      nickName == '' ||
      email == '' ||
      certNumber == '' ||
      phoneNumber == '' ||
      name == ''
    ) {
      alert('필수 항목을 모두 입력하지 않았습니다.');
    }
    const body = {
      account: id,
      password: password,
      name: name,
      nickname: nickName,
      email: email,
      phone_number: phoneNumber,
      date_birth: birth,
    };
    const ip = 'http://haejun.iptime.org:8090'; // ip address
    axios
      .post(ip + '/member', body)
      .then(() => {
        alert('회원 가입에 성공하였습니다.');
      })
      .catch((err) => {
        console.log(err);
        alert('회원 가입에 실패하였습니다.');
      });
  };

  return (
    <div>
      <Header />
      <form className={classes.root} noValidate autoComplete="off">
        <div className={classes.table}>
          <div className={classes.title}>
            {' '}
            <img src={nyangImg} align="middle" className={classes.nyangImg} />
          </div>
          <div className={classes.item}>
            <TextField
              required
              id="id"
              label="아이디"
              value={id}
              onChange={onChangeId}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={onCheckId}
              size="small"
              className={classes.btn}
            >
              중복 확인
            </Button>
          </div>
          <div className={classes.item}>
            <TextField
              required
              id="password"
              label="비밀번호"
              value={password}
              onChange={onChangePassword}
              variant="outlined"
            />
            <Button disabled size="small" className={classes.btn} />
          </div>
          <div className={classes.item}>
            <TextField
              required
              id="nickName"
              label="닉네임"
              value={nickName}
              onChange={onChangeNickName}
              variant="outlined"
            />
            <Button disabled size="small" className={classes.btn} />
          </div>
          <div className={classes.item}>
            <TextField
              required
              id="email"
              label="이메일"
              value={email}
              onChange={onChangeEmail}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={onCheckEmail}
              size="small"
              className={classes.btn}
            >
              인증요청
            </Button>
          </div>
          <div className={classes.item}>
            <TextField
              required
              id="certNumber"
              label="인증번호"
              value={certNumber}
              onChange={onChangeCertNumber}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={onCheckEmailCertNumber}
              size="small"
              className={classes.btn}
            >
              확인
            </Button>
          </div>
          <div className={classes.item}>
            <TextField
              type="text"
              numberOnly
              required
              id="phoneNumber"
              label="연락처('-' 제외)"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
              variant="outlined"
            />
            <Button disabled size="small" className={classes.btn} />
          </div>
          <div className={classes.item}>
            <TextField
              required
              id="name"
              label="이름"
              value={name}
              size="small"
              onChange={onChangeName}
              variant="outlined"
            />
            <Button disabled size="small" className={classes.btn} />
          </div>
          <form className={classes.item} noValidate>
            <TextField
              id="date"
              label="생년월일"
              type="date"
              defaultValue="2021-01-01"
              className={classes.textField}
              value={birth}
              variant="outlined"
              onChange={onChangeBirth}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button disabled size="small" className={classes.btn} />
          </form>
          <div className={classes.item}>
            <Button
              variant="contained"
              onClick={EnrollMemberInfo}
              className={classes.okbtn}
            >
              회원 가입
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EnrollMember;
