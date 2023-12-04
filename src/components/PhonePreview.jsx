export function PhonePreview() {
  return (
    <div className="w-[308px] h-[632px] relative m-auto text-secondary p-[10px] px-[1.5em] pt-[3.34em] flex flex-col gap-4 items-center">
      <img
        className="rounded-full w-24 h-24"
        src="https://picsum.photos/96/96"
        alt=""
      />

      <div className="bg-neutral h-[1em] w-[10em] rounded-full"></div>
      <div className="bg-neutral h-[0.5em] w-[4.5em] rounded-full"></div>

      <div className="bg-neutral h-[2.75em] w-full rounded-xl mt-9"></div>
      <div className="bg-neutral h-[2.75em] w-full rounded-xl"></div>
      <div className="bg-neutral h-[2.75em] w-full rounded-xl"></div>
      <div className="bg-neutral h-[2.75em] w-full rounded-xl"></div>
      <div className="bg-neutral h-[2.75em] w-full rounded-xl"></div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="308"
        height="632"
        viewBox="0 0 308 632"
        fill="none"
        className="absolute top-0 left-0 bottom-0 right-0 "
      >
        <path
          d="M1 54.5C1 24.9528 24.9528 1 54.5 1H253.5C283.047 1 307 24.9528 307 54.5V577.5C307 607.047 283.047 631 253.5 631H54.5C24.9528 631 1 607.047 1 577.5V54.5Z"
          stroke="currentColor"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="286"
        height="612"
        viewBox="0 0 286 612"
        fill="none"
        className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px]"
      >
        <path
          d="M1 45.5C1 20.9233 20.9233 1 45.5 1H69.5C75.8513 1 81 6.14873 81 12.5C81 20.5081 87.4919 27 95.5 27H190.5C198.508 27 205 20.5081 205 12.5C205 6.14873 210.149 1 216.5 1H240.5C265.077 1 285 20.9233 285 45.5V566.5C285 591.077 265.077 611 240.5 611H45.5C20.9233 611 1 591.077 1 566.5V45.5Z"
          fill="transparent"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}
