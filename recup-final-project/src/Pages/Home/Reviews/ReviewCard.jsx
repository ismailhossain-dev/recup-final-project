import React from "react";

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimonial } = review;
  return (
    <div className="max-w-sm bg-gray-100 rounded-2xl p-6 shadow-md ">
      {/* Quote Icon */}
      <div className="text-4xl text-gray-300 mb-4">“</div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed">{testimonial}</p>

      {/* Dotted Line */}
      <div className="border-t border-dashed border-gray-300 my-6"></div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12  rounded-full">
          <img src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
