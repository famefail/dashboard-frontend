import Button from '@/common/button/page';
import Input from '@/common/input/page';
import React from 'react';
import { ModalController } from './controller';
import Textarea from '@/common/textarea/page';

interface IModal {
  props: {
    onClickCreate?: React.MouseEventHandler<HTMLButtonElement>
    mode: 'Create' | 'Update'
  }
}

const Modal = ({ props }: IModal) => {
  const { onClickCreate, mode } = props
  const { title,
    setTitle,
    description,
    setDescription
  } = ModalController()
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-[685px] my-6 mx-auto h-[510px]">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                {`${mode} Post`}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClickCreate}
              >
                <span className="text-black h-6 w-6 text-2xl block">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6">
              <Input props={{ value: title, placeholder: 'title', className: 'h-[44px]', setInput: setTitle }} />
              <Textarea props={{ value: description, placeholder: 'What’s on your mind...', setTextarea: setDescription, className: 'min-h-[224px] my-4' }} />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onClickCreate}
              >
                Cancel
              </button>
              <Button
                props={{ onClick: onClickCreate, title: 'post' }}
              />

            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
