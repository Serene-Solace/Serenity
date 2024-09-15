import { format, parse } from 'date-fns'
import { enUS } from 'date-fns/locale'

export const formatFileSize = (size: string | number): string => {
  const sizeInBytes = typeof size === 'string' ? Number(size) : size
  if (isNaN(sizeInBytes)) return 'Invalid size'
  if (sizeInBytes < 1024) return `${sizeInBytes} B`
  if (sizeInBytes < 1024 * 1024) return `${(sizeInBytes / 1024).toFixed(1)} KB`
  if (sizeInBytes < 1024 * 1024 * 1024) return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`
  return `${(sizeInBytes / (1024 * 1024 * 1024)).toFixed(1)} GB`
}

export const formatDateTime = (datetime: string): string => {
  const date = new Date(datetime)
  return format(date, 'dd/MM/yyyy hh:mm:ss a', { locale: enUS })
}

export const clientSideSort = (data: any[], sortBy: string) => {
  return [...(data || [])].sort((a, b) => {
    const valueA = parse(a[sortBy], 'dd/MM/yyyy hh:mm:ss a', new Date())
    const valueB = parse(b[sortBy], 'dd/MM/yyyy hh:mm:ss a', new Date())
    return valueB.getTime() - valueA.getTime()
  })
}

export const clientSideSortOnDate = (data: any[], sortBy: string) => {
  return [...(data || [])].sort((a, b) => {
    const valueA = Date.parse(a[sortBy])
    const valueB = Date.parse(b[sortBy])
    return valueB - valueA
  })
}

export const formatData = (data: any, type: string) => {
  if (!data) return []
  if (type === 'document' || type === 'document-history') {
    return data.map((item: any, index: any) => {
      return {
        id: item.document_id,
        documentName: item.document_name,
        status: item.status,
        uploadTime: formatDateTime(item.created_timestamp),
        size: type === 'document-history' ? formatFileSize(item.metadata.document_size) : item.metadata.document_size,
        open: 'open',
        download: 'download',
        indexName: index
      }
    })
  } else if (type === 'workspace') {
    return data.map((item: any) => ({
      id: item.workspace_id,
      workspaceName: item.name,
      workspaceDesc: item.description,
      uploadTime: formatDateTime(item.created_date),
      type: item.type,
      status: item.status,
      open: 'open',
      totalFiles: item.document_ids?.length
    }))
  }
}

export const getTimeDifference = (dateString: string): string => {
  const targetDate = new Date(dateString)
  const currentDate = new Date()

  const diffInMilliseconds = targetDate.getTime() - currentDate.getTime()
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24))

  if (diffInDays > 0) {
    return `${diffInDays} day${diffInDays > 1 ? 's' : ''}`
  } else {
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60))
    const diffInMinutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60))

    if (diffInHours >= 1) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} and ${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''}`
    } else {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''}`
    }
  }
}
