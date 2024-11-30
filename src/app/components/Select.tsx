'use client'

import {useState} from 'react'
import {Label, Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/16/solid'
import {CheckIcon} from '@heroicons/react/20/solid'

export interface Options {
  id: string | number
  name: string
}

export default function Select({label, options}: {label?: string; options: Options[]}) {
  const [selected, setSelected] = useState(options[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {label && <Label className="block text-sm/6 font-medium text-gray-900">Assigned to</Label>}
      <div className="relative mt-2">
        <ListboxButton className="grid w-full w-36  cursor-pointer grid-cols-1 rounded-md bg-transparent py-1.5 pl-3 pr-2 text-left text-gray-900 bg-transparent sm:text-sm/6">
          <p className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <p className="block truncate text-white font-extrabold">{selected.name}</p>
          </p>
          <ChevronDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4 text-white text-lg"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute min-w-36 z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {options.map(option => (
            <ListboxOption
              key={option.id}
              value={option}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {option.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}
