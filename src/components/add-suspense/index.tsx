import { FC, Suspense } from 'react'

const Loading: FC = () => {
  return <h1>Loading...</h1>
}

interface AddSuspenseProps {
  fallback?: React.ReactElement
  component: React.ReactElement
}

export const AddSuspense: React.FC<AddSuspenseProps> = ({
  fallback = <Loading />,
  component
}) => {
  return <Suspense fallback={fallback}>{component}</Suspense>
}
