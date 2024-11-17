import React from 'react';
import './style.css';
import { CustomInput } from '../';
import { debounce } from 'src/utils/utils';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchPanel = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pageNumber = searchParams.get('page') || '1';
  const name = searchParams.get('name') || '';

  const onChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const isEmptySearchName = !e.target.value;
    if (isEmptySearchName) {
      navigate(`/?page=1`);
    } else {
      navigate(`/?page=${pageNumber}&name=${e.target.value}`);
    }
  }, 1000);
  return (
    <div className="panelWrapper">
      <CustomInput onChange={onChange} defaultValue={name} />
    </div>
  );
};
export default React.memo(SearchPanel);
