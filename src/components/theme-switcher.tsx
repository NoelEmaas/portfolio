import styled from 'styled-components';
import { useTheme } from "@/components/theme-provider"
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
    const { setTheme, theme } = useTheme()
    const [checked, setChecked] = useState(theme === "dark");

    useEffect(() => {
        console.log(theme);
        setChecked(theme === "dark")
    }, [theme])

    const toggleTheme = () => {
        setChecked(!checked)
        setTheme(checked ? "light" : "dark")
    }

    return (
        <div className='fixed top-0 z-50 w-full'>
          <StyledWrapper className='xl:w-[1280px] md:px-20 sm:px-8 px-6 mx-auto z-50 flex justify-end'>
              <label className="py-3 my-3 switch">
                  <input type="checkbox" checked={checked} onChange={toggleTheme} />
                  <span className="slider" />
              </label>
          </StyledWrapper>
        </div>

    );
}

const StyledWrapper = styled.div`
  .switch {
    display: block;
    --width-of-switch: 2.8em;
    --height-of-switch: 1.5em;
    --size-of-icon: 0.9em;
    --slider-offset: 0.3em;
    position: relative;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e7e7e7;
    transition: .4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 0.9em;
    width: 0.9em;
    border-radius: 20px;
    left: var(--slider-offset,0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #181818;
  }

  input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)));
    background: #181818;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}`;

export default ThemeSwitcher;
