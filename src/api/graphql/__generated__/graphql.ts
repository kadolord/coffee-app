/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createProduct: Product;
  deleteProduct?: Maybe<SuccessResponse>;
  updateProduct: Product;
};


export type MutationCreateProductArgs = {
  availability: Scalars['String']['input'];
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  priceLarge: Scalars['Float']['input'];
  priceMedium: Scalars['Float']['input'];
  priceSmall: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  stock: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  id: Scalars['Int']['input'];
  input?: InputMaybe<UpdateProductInput>;
};

export type Product = {
  __typename?: 'Product';
  availability: Scalars['String']['output'];
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  ingredients: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  priceLarge: Scalars['Float']['output'];
  priceMedium: Scalars['Float']['output'];
  priceSmall: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  stock: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getProductById: Product;
  getProducts: Array<Product>;
};


export type QueryGetProductByIdArgs = {
  id: Scalars['Int']['input'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type UpdateProductInput = {
  availability?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  ingredients?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  priceLarge?: InputMaybe<Scalars['Float']['input']>;
  priceMedium?: InputMaybe<Scalars['Float']['input']>;
  priceSmall?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  stock?: InputMaybe<Scalars['Int']['input']>;
};
