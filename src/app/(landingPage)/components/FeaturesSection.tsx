export function FeaturesSection() {
  return (
    <section
      id="features"
      className="flex items-center justify-center w-full min-h-[calc(100vh-3.5rem)] border-t"
    >
      <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why choose our app?
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We offer a seamless experience with features designed to make your
            holiday planning stress-free.
          </p>
        </div>
        <div className="grid max-w-sm gap-4 items-start sm:grid-cols-2 md:max-w-4xl md:gap-6 lg:grid-cols-3 lg:gap-10">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Intuitive Interface</h3>
            <p className="text-gray-500 dark:text-gray-400">
              The application interface is designed to be user-friendly and easy
              to use, making vacation planning an enjoyable experience.
            </p>
          </div>{" "}
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Creating Vacation Plans</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Users can create detailed plans for their vacation, including
              destinations, dates and activities.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Plan View</h3>
            <p className="text-gray-500 dark:text-gray-400">
              User-created vacation plans are displayed neatly for easy
              reference.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Plan Editing</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Users can make changes to existing plans, such as adding or
              removing activities.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Deletion of Plans</h3>
            <p className="text-gray-500 dark:text-gray-400">
              The ability to delete old or unused plans is available to users.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Login System with Magic Link</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Users can log in securely using magic links sent via email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
