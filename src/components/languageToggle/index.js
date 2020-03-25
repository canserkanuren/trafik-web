import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../redux/actions';
import Select from '../common/select';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const language = useSelector(state => state.language.language);
  const defaultLanguages = useSelector(
    state => state.language.defaultLanguages
  );

  const updateLanguage = async lang => {
    await dispatch(Actions.language.setLanguage(lang));
    i18n.changeLanguage(lang);
  };

  return (
    <Select
      list={defaultLanguages}
      onSelect={updateLanguage}
      value={language}
      placeholder={t('language')}
    />
  );
};

LanguageToggle.propTypes = {};

export default LanguageToggle;
