interface IFlexibleImageVariantOptions {
  width: number;
  height: number;
  blur?: number;
}

const FLEXIBLE_IMAGE_VARIANT = 'public';

export const getCustomCloudflareUrl = (
  url: string,
  options: IFlexibleImageVariantOptions
) => {
  const { width, height, blur } = options;
  const query = [];

  if (width) {
    query.push(`w=${width}`);
  }
  if (height) {
    query.push(`h=${height}`);
  }

  if (blur) {
    query.push(`blur=${blur}`);
  }
  return url.replace(FLEXIBLE_IMAGE_VARIANT, query.join(','));
};
