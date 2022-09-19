import AgreeCheckBox from "../common/svg/AgreeCheckBox";
import * as S from "./register.styles";
import { IRegisterUi } from "./register.types";

const RegisterUi = ({
  CheckBoxOnChange,
  maleChecked,
  femaleChecked,
  noChecked,
}: IRegisterUi) => {
  return (
    <>
      <S.RegisterContainer>
        <S.RegisterTitle>회원가입</S.RegisterTitle>
        <S.LineContainer>
          <S.MostText>
            <span>*</span> 필수입력사항
          </S.MostText>
          <S.InputContainer>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">
                  아이디 <span>*</span>
                </S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.InputContentInput
                  type="text"
                  placeholder="아이디를 입력해주세요."
                />
              </S.InputContentBox>
              <S.InputConfirmBox>
                <S.InputConfirmButton>중복확인</S.InputConfirmButton>
              </S.InputConfirmBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">
                  비밀번호 <span>*</span>
                </S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.InputContentInput
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
              </S.InputContentBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">
                  비밀번호확인 <span>*</span>
                </S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.InputContentInput
                  type="text"
                  placeholder="비밀번호를 한번 더 입력해주세요."
                />
              </S.InputContentBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">
                  이름 <span>*</span>
                </S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.InputContentInput
                  type="text"
                  placeholder="이름을 입력해주세요."
                />
              </S.InputContentBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">
                  이메일 <span>*</span>
                </S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.InputContentInput
                  type="text"
                  placeholder="예: cjt3591@gmail.com"
                />
              </S.InputContentBox>
              <S.InputConfirmBox>
                <S.InputConfirmButton>중복확인</S.InputConfirmButton>
              </S.InputConfirmBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">
                  휴대폰 <span>*</span>
                </S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.InputContentInput
                  type="text"
                  placeholder="숫자만 인력해주세요."
                />
              </S.InputContentBox>
              <S.InputConfirmBox>
                <S.InputConfirmButton disabled>
                  인증번호 받기
                </S.InputConfirmButton>
              </S.InputConfirmBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">
                  주소 <span>*</span>
                </S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.AddressInput type="text" disabled />
                <S.AddressInput
                  type="text"
                  placeholder="상세주소를 입력해주세요."
                />
                <S.InputAddressFindBtn>주소 검색</S.InputAddressFindBtn>
                <S.InputAddressText>
                  배송지에 따라 상품 정보가 달라질 수 있습니다.
                </S.InputAddressText>
              </S.InputContentBox>
              <S.InputConfirmBox></S.InputConfirmBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">성별</S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.SelectGenderBox>
                  <S.SelectGenderContainer>
                    <S.DefaultCheckBox
                      type="radio"
                      id="male"
                      onChange={CheckBoxOnChange}
                      name="gender"
                      checked={maleChecked === true}
                    />

                    <S.GenderCheckBoxLabel htmlFor="male">
                      <S.GenderCheckBox>
                        {maleChecked ? (
                          <S.GenderCheckBoxOn>
                            <span></span>
                          </S.GenderCheckBoxOn>
                        ) : null}
                      </S.GenderCheckBox>
                      남자
                    </S.GenderCheckBoxLabel>
                  </S.SelectGenderContainer>
                  <S.SelectGenderContainer>
                    <S.DefaultCheckBox
                      type="radio"
                      id="female"
                      onChange={CheckBoxOnChange}
                      name="gender"
                      checked={femaleChecked === true}
                    />

                    <S.GenderCheckBoxLabel htmlFor="female">
                      <S.GenderCheckBox>
                        {femaleChecked ? (
                          <S.GenderCheckBoxOn>
                            <span></span>
                          </S.GenderCheckBoxOn>
                        ) : null}
                      </S.GenderCheckBox>
                      여자
                    </S.GenderCheckBoxLabel>
                  </S.SelectGenderContainer>
                  <S.SelectGenderContainer>
                    <S.GenderCheckBoxLabel htmlFor="noSelect">
                      <S.DefaultCheckBox
                        type="radio"
                        id="noSelect"
                        onChange={CheckBoxOnChange}
                        name="gender"
                        checked={noChecked === true}
                      />
                      <S.GenderCheckBox>
                        {noChecked ? (
                          <S.GenderCheckBoxOn>
                            <span></span>
                          </S.GenderCheckBoxOn>
                        ) : null}
                      </S.GenderCheckBox>
                      선택안함
                    </S.GenderCheckBoxLabel>
                  </S.SelectGenderContainer>
                </S.SelectGenderBox>
              </S.InputContentBox>
            </S.InputDefaultBox>
            <S.InputDefaultBox>
              <S.InputTitleBox>
                <S.InputTitleLabel htmlFor="">생년월일</S.InputTitleLabel>
              </S.InputTitleBox>
              <S.InputContentBox>
                <S.BirthdayBox>
                  <S.BirthdayInput
                    type="text"
                    placeholder="YYYY"
                    maxLength={4}
                  />
                  /
                  <S.BirthdayInput type="text" placeholder="MM" maxLength={2} />
                  /
                  <S.BirthdayInput type="text" placeholder="DD" maxLength={2} />
                </S.BirthdayBox>
              </S.InputContentBox>
            </S.InputDefaultBox>
          </S.InputContainer>
        </S.LineContainer>
        <S.AgreeBox>
          <S.AgreeLeftBox>
            이용약관동의 <span>*</span>
          </S.AgreeLeftBox>
          <S.AgreeRightBox>
            <S.AgreeAllCheckBox>
              <S.defaultAgreeCheckBox>
                <AgreeCheckBox />
              </S.defaultAgreeCheckBox>
              <S.AgreeAllCheckText>전체 동의합니다.</S.AgreeAllCheckText>
            </S.AgreeAllCheckBox>
          </S.AgreeRightBox>
        </S.AgreeBox>
        <S.RegisterBtn type="submit" value={"회원가입"} />
      </S.RegisterContainer>
    </>
  );
};

export default RegisterUi;
