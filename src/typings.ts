declare namespace Linksys {
  namespace Response {
    interface Base<T> {
      result: string;
      output: T;
    }

    interface BaseTransaction {}
  }
}
