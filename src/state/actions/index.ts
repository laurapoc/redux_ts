import { ActionType } from "../action-types/index";

interface SearcRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}
interface SearcRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearcRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearcRepositoriesAction | SearcRepositoriesSuccessAction | SearcRepositoriesErrorAction;
