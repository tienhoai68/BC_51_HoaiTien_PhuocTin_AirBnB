import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { pink } from '@mui/material/colors';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HeaderProfile() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();


  const renderButtonLogin = () => {
    if (!userState.userInfo) {
      return (
        <>
        <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <NavLink
              to="/register"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Đăng kí
            </NavLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <NavLink
              to="/login"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Đăng Nhập
            </NavLink>
          )}
        </Menu.Item>
      </div>
      <div className="py-1">
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Cho thuê nhà
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Tổ chức trải nghiệm
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Trợ giúp
          </a>
        )}
      </Menu.Item>
    </div>
        
        </>
      );
    } else {
      return (
        <>
        <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <NavLink
              to="/register"
              className={classNames(
                active ? 'bg-gray-100 text-rose-500' : 'text-rose-500', 
              'block px-4 py-2 text-sm font-semibold'
              )}
            >
              Chuyến đi
            </NavLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <NavLink
              to="/login"
              className={classNames(
                active ? 'bg-gray-100 text-rose-500' : 'text-rose-500', 
              'block px-4 py-2 text-sm font-semibold'
              )}
            >
             Thông tin cá nhân
            </NavLink>
          )}
        </Menu.Item>
      </div>
      <div className="py-1">
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Cho thuê nhà
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            Tổ chức trải nghiệm
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm '
            )}
          >
            Trợ giúp
          </a>
        )}
      </Menu.Item>
      <Menu.Item>
        {({ active }) => (
          <a
            href="#"
            className={classNames(
              active ? 'bg-gray-100 text-rose-500' : 'text-rose-500', 
              'block px-4 py-2 text-sm font-semibold'
            )}
          >
            Đăng xuất
          </a>
        )}
      </Menu.Item>
    </div>
        </>
      );
    }
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <DehazeIcon />
          <AccountCircleIcon sx={{ color: pink[500] }} className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {renderButtonLogin()}
          
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

