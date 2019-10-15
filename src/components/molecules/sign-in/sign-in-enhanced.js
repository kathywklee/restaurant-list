import React from 'react';
import { connect } from 'react-redux';

import { translate } from 'mechanisms/l10n/hoc/translate';
import { SignInComponent } from './sign-in';

export const SignInEnhanced = translate('components.signin')(SignInComponent);
