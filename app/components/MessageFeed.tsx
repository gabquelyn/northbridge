import moment from "moment";

export default function MessageFeed({
  messages,
}: {
  messages: Review[];
}) {
  return (
    <div className="h-64 overflow-y-auto rounded-xl border border-gray-200 bg-white p-4">
      <div className="space-y-6">
        {messages.length === 0 ? (
          <p className="text-center text-sm text-gray-500">
            No messages yet.
          </p>
        ) : (
          messages.map((item) => (
            <div
              key={item._id}
              className="relative border-l-2 border-gray-100 pl-6"
            >
              {/* Timeline dot */}
              <span className="absolute left-0 top-2 h-2 w-2 -translate-x-1/2 rounded-full border-2 border-white bg-primary" />

              {/* Date */}
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                {moment(item.createdAt).format("YYYY MMM D, h:mm A")}
              </p>

              {/* Message */}
              <div className="rounded-lg bg-gray-50 p-4 shadow-sm transition-shadow hover:shadow-md">
                <p className="whitespace-pre-wrap text-sm leading-7 text-gray-800">
                  {item.message}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}