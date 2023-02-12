'use client';

import { TextField } from 'components/feature';
import { LargeBtn, StyledLayout, Typography } from 'components/shared';
import { checkEmptyInputError } from 'core/storeRegistrationService';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import { FormEvent } from 'react';
import { useStep1Store } from 'store/actions/storeRegistrationStore';
import { theme } from 'styles';
import style from 'styles/style';

const Step1 = () => {
	const router = useRouter();
	const { inputArr, changeError, changeNormal } = useStep1Store();
	const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const emptyInput = checkEmptyInputError(e.currentTarget.step1, changeError);
		if (emptyInput !== 0) return;
		// 여기서부터 서버 api 연결 로직
	};
	return (
		<form onSubmit={handleOnSubmit}>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerName">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						대표자명
					</Typography>
				</label>
				<TextField
					id="managerName"
					name="step1"
					emptyErrorMessage="대표자명을"
					onFocus={() => changeNormal(0)}
					inputFlag={inputArr[0]}
					width="320px"
					value={undefined}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerEmail">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						이메일
					</Typography>
				</label>
				<TextField
					emptyErrorMessage="이메일을"
					id="managerEmail"
					name="step1"
					onFocus={() => changeNormal(1)}
					inputFlag={inputArr[1]}
					width="320px"
					value={undefined}
				/>
			</StyledLayout.TextFieldSection>
			<StyledLayout.TextFieldSection>
				<label htmlFor="managerPhonenumber">
					<Typography variant="h2" aggressive="body_oneline_004" color={theme.colors.gray_005}>
						전화번호
					</Typography>
				</label>
				<TextField
					emptyErrorMessage="전화번호를"
					id="managerPhonenumber"
					name="step1"
					onFocus={() => changeNormal(2)}
					inputFlag={inputArr[2]}
					width="320px"
					value={undefined}
				/>
			</StyledLayout.TextFieldSection>

			<StyledLayout.FlexBox justifyContent="center" style={{ paddingTop: '16px' }}>
				<LargeBtn style={style.btnStyle.primary_btn_002} type="submit">
					다음단계
				</LargeBtn>
			</StyledLayout.FlexBox>
		</form>
	);
};

export default Step1;
