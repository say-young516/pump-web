import { memo, useEffect } from 'react';
import Image from 'next/image';
import { StyledLayout, Typography } from 'components/shared';
import * as S from './styled';
import { PumpLogo } from 'public/static/images';
import { removeUserTokenInLocalStorage } from 'utils/storage';
import useUserSessionStore from 'store/actions/userSessionStore';
import { useGetUserSession } from 'hooks/api/auth/useUserSession';
import Link from 'next/link';
import { theme } from 'styles';

const Header = () => {
	const { data: userSessionFetch } = useGetUserSession();
	const { userSession, setUserSession } = useUserSessionStore();

	const handleLogoutClick = () => {
		removeUserTokenInLocalStorage();
	};

	useEffect(() => {
		if (userSessionFetch) {
			setUserSession(userSessionFetch);
		}
	}, [userSessionFetch]);

	return (
		<S.Container>
			<StyledLayout.SubMaxContainer>
				<S.GlobalNavigation>
					<S.LogoWrapper href={'/'} hrefLang={'ko'}>
						<span className="visually-hidden">Pump 사이트 로고 이미지</span>
						<Image src={PumpLogo} alt="Pump Logo" width={110} height={50} priority />
					</S.LogoWrapper>

					<StyledLayout.UnorderList gap={'40px'}>
						{!userSession?.id && (
							<S.NavigationItem>
								<StyledLayout.LinkWrapper href={'/signin'} replace>
									<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_005}>
										로그인
									</Typography>
								</StyledLayout.LinkWrapper>
							</S.NavigationItem>
						)}

						{userSession?.id && (
							<>
								<S.NavigationItem>
									<StyledLayout.LinkWrapper href={'/mypage/store'}>
										<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_005}>
											마이페이지
										</Typography>
									</StyledLayout.LinkWrapper>
								</S.NavigationItem>
								<S.NavigationItem>
									<Link href="/" target="_top" onClick={handleLogoutClick}>
										<Typography variant="h2" aggressive="button_001" color={theme.colors.gray_005}>
											로그아웃
										</Typography>
									</Link>
								</S.NavigationItem>
							</>
						)}
					</StyledLayout.UnorderList>
				</S.GlobalNavigation>
			</StyledLayout.SubMaxContainer>
		</S.Container>
	);
};

export default memo(Header);
